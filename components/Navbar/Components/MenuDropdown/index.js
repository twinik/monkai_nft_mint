import React from "react";
import { Menu, MenuItem, MenuDivider } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { ProductsOptions } from "../../content";
import ItemNavbarProduct from "../ItemNavbarProduct";

export default function Index({ children }) {
	return (
		<Menu
			menuButton={children}
			transition
			menuStyle={{ marginTop: "1rem" }}
		>
			{ProductsOptions.map(
				({ title, icon, description, link }, index) => (
					<>
						<MenuItem key={title}>
							<ItemNavbarProduct
								title={title}
								icon={icon}
								description={description}
								link={link}
							/>
						</MenuItem>
						{index !== ProductsOptions.length - 1 && (
							<MenuDivider />
						)}
					</>
				)
			)}
		</Menu>
	);
}
