import axios from "axios";
import { environment } from "../../config";

export const api = axios.create({
	baseURL: environment.apiUrl,
	headers: {
		"Content-Type": "application/json",
	}
});