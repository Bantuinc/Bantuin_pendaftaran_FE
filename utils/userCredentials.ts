import jwt, { JwtPayload } from "jsonwebtoken";

interface JWTUserPayload extends JwtPayload {
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  nameid: string;
  nbf: number;
  role: "User";
}

const getUserData = (token: string) => {
  const decoded = jwt.decode(token);
  return decoded;
};

const getUserNameId = (token: string): string => {
  const decoded = jwt.decode(token) as JWTUserPayload;
  return decoded?.nameid;
};

export { getUserData, getUserNameId };
