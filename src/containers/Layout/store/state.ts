export interface LayoutStateInterface {
  userSignedIn: boolean;
  nav: {
    signedIn: {
      profile: {
        text: string;
        link: string;
      };
      logOut: {
        text: string;
        link: string;
      };
    };
    signedOut: {
      logIn: {
        text: string;
        link: string;
      };
      signUp: {
        text: string;
        link: string;
      };
    };
  };
}

export const layoutState = {
  userSignedIn: false,
  nav: {
    signedIn: {
      profile: {
        text: "profile",
        link: "/profile",
      },
      logOut: {
        text: "Log Out",
        link: "/logout",
      },
    },
    signedOut: {
      logIn: {
        text: "Log In",
        link: "/login",
      },
      signUp: {
        text: "Join Now",
        link: "/signup",
      },
    },
  },
};

export default layoutState;
