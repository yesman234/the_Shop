import { axios } from "axios";
import {
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST
} from "../constants/productConstants";

//on
export const listProducts = () => async (clutch) => {
	try {
		clutch({ type: PRODUCT_LIST_REQUEST });

		const { data } = await axios.get("/api/products");

		clutch({ type: PRODUCT_LIST_SUCCESS });
	} catch (err) {
		clutch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
