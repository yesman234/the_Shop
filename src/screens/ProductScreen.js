import React from "react";
import { Link } from "react-router-dom";
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	ListGroupItem
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
	//assigning product ids to Product var or obj haha
	const product = products.find((p) => p._id === match.params.id);
	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>

			<Col md={6}>
				<Image src={product.image} alt={product.name} fluid />
			</Col>
			<Col md={3}>
				<ListGroup variant='flush'>
					<ListGroup.Item>
						<Row>
							<Col>Price:</Col>
							<Col>
								<strong>${product.price}</strong>
							</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						<Row>
							<Col>Status:</Col>
							<Col>
								<strong>${product.price}</strong>
							</Col>
						</Row>
					</ListGroup.Item>
					<ListGroupItem>
						<Button
							className='btn-block'
							type='button'
							disabled={product.countInStock === 0}>
							Add to Cart
						</Button>
					</ListGroupItem>
				</ListGroup>
			</Col>
		</>
	);
};

export default ProductScreen;
