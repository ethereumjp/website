import { css } from "@emotion/react";
import SendIcon from "@mui/icons-material/Send";
import {
  Alert,
  Button,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { useLocale } from "@/hooks/useLocale";

type FormInput = {
  name: string;
  organization: string;
  email: string;
  wallet: string;
  inquiry: string;
  privacy: boolean;
};

const ContactForm: FC = () => {
  const { locale, t } = useLocale();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      wallet: "",
      inquiry: "",
    },
  });

  const [sendStatus, setSendStatus] = useState<number>(0);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    if (!sendStatus) {
      setSendStatus(1);
      // send to endpoint
      fetch("/api/formsend", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        if (res.status === 201) {
          setSendStatus(2);
        } else if (res.status >= 400) {
          // unsuccessful inquiries trigger error message
          setSendStatus(3);
          throw new Error(`${res.status}, ${res.statusText}`);
        }
      });
    }
  };

  const PopupAlerts = (props: { status: number }) => {
    if (props.status === 1) {
      return <Alert severity="info">Submitting, hold on...</Alert>;
    }
    if (props.status === 2) {
      return (
        <Alert
          severity="success"
          onClose={() => {
            setSendStatus(0);
            router.reload();
          }}
        >
          Your inquiry was successfully submitted.
        </Alert>
      );
    }
    if (props.status === 3) {
      return (
        <Alert
          severity="error"
          onClose={() => {
            setSendStatus(0);
            router.reload();
          }}
        >
          Invalid submission.
        </Alert>
      );
    }
    return <></>;
  };

  return (
    /* handleSubmit() will validate inputs before invoking onSubmit() */
    <div>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: "light",
          },
        })}
      >
        <form
          css={css`
          display: flex;
          flex-direction: column;
        `}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant="filled"
                label={t.FORM.NAME}
                disabled={!!sendStatus}
                {...register("name", {
                  required: "your name is required",
                })}
                error={!!errors.name}
                helperText={errors?.name ? errors.name.message : "\u00a0"}
                {...field}
              />
            )}
          />

          <Controller
            name="organization"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant="filled"
                label={t.FORM.ORGANIZATION}
                disabled={!!sendStatus}
                {...register("organization", {
                  required: "Your organization is required",
                })}
                error={!!errors.organization}
                helperText={
                  errors?.organization ? errors.organization.message : "\u00a0"
                }
                {...field}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant="filled"
                label={t.FORM.EMAIL}
                disabled={!!sendStatus}
                {...register("email", {
                  required: "Your email address is required",
                })}
                error={!!errors.email}
                helperText={errors?.email ? errors.email.message : "\u00a0"}
                {...field}
              />
            )}
          />

          <Controller
            name="wallet"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant="filled"
                label={t.FORM.WALLET}
                disabled={!!sendStatus}
                {...register("wallet", {
                  required:
                    "Your Ethereum address is required (`0x...` or ENS)",
                })}
                error={!!errors.wallet}
                helperText={errors?.wallet ? errors.wallet.message : "\u00a0"}
                {...field}
              />
            )}
          />

          <Controller
            name="inquiry"
            control={control}
            render={({ field }) => (
              <TextField
                variant="filled"
                label={t.FORM.INQUIRY}
                multiline={true}
                minRows={3}
                disabled={!!sendStatus}
                {...register("inquiry", {
                  required: "Your inquiry is required",
                  maxLength: {
                    value: 2000,
                    message:
                      "Your inquiry must be 2000 characters or fewer in length.",
                  },
                })}
                error={!!errors.inquiry}
                helperText={errors?.inquiry ? errors.inquiry.message : "\u00a0"}
                {...field}
              />
            )}
          />

          <PopupAlerts status={sendStatus} />
          <div
            css={css`
            margin-left: auto;
            margin-right: auto;
          `}
          >
            <Button
              endIcon={<SendIcon />}
              type="submit"
              variant="outlined"
              color="inherit"
              disabled={!!sendStatus}
            >
              {sendStatus
                ? sendStatus === 2
                  ? "Submitted"
                  : "Submitting"
                : "Send"}
            </Button>
          </div>
        </form>
      </ThemeProvider>
    </div>
  );
};

export default ContactForm;
