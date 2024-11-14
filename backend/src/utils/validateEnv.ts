import { cleanEnv , port, str} from "envalid";

export const env = cleanEnv(process.env, {
    MONGO_CONNECTION: str(),
    PORT: port({default: 3000}),
});