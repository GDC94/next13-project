import Head from "next/head";
import { MainLayout } from "@/layouts/mainLayout";
import {
  ErrorContainer,
  ErrorNumberAndMessage,
  Number,
  MessageButton,
  Message,
  MessageLine,
  ButtonWrapper,
} from "./errorPage.styles";

interface ErrorPageProps {
  statusCode?: string | number;
  message: string;
  textButton?: string;
  linkButton?: string;
}

export const ErrorPage = ({ statusCode, message }: ErrorPageProps) => {
  return (
    <MainLayout full>
      <Head>
        <title>😔 Something went wrong </title>
      </Head>
      <ErrorContainer>
        <ErrorNumberAndMessage>
          <Number>{statusCode}</Number>
          <MessageButton>
            <Message>
              {message}
              <MessageLine />
            </Message>
            <ButtonWrapper></ButtonWrapper>
          </MessageButton>
        </ErrorNumberAndMessage>
      </ErrorContainer>
    </MainLayout>
  );
};

export default ErrorPage;
