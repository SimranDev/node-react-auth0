import { Auth0Provider } from "@auth0/auth0-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Auth0ProviderWrapper = ({ children }: Props) => {
  const domain = "your-auth0-domain";
  const clientId = "your-client-id";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWrapper;
