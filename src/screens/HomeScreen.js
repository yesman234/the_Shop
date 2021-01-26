import axios from "axios";
import { React, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
	const [products, fireStarter] = useState([]);
	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get("/api/products");
			fireStarter(data);
		};
		fetchProduct();
	}, []);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3} padding={5}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
