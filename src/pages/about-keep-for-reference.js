import * as React from "react"
import { Link } from "gatsby"

/*Styles*/
const AboutStyles = {
	background: "#34343430",
	padding: "1rem",
	textAlign: "center",
	margin: "auto",
	width: "600px"
}
const ListSection = {
	border: "1px solid #343434",
	margin: "auto",
	width: "632px"
}
const ItemStyles = {
	listStyle: "none" 
}

/* Data */
const items = [
	{
		text: "Yahoo News",
		url: "https://news.yahoo.com/",
		description: "A website with lots of news"
	},
	{
		text: "To Many Kittens!",
		url: "https://www.etsy.com/market/too_many_kittens",
		description: "An etsy store with kitten based products :]"
	},
	{
		text: "Steam Store",
		url: "https://store.steampowered.com/",
		description: "A place to buy video games :o"
	}
]

/* Page */
const AboutPage = () => {
	return(
		<main style={ListSection}>
			<div style={AboutStyles}>
				<h1>About Page</h1>
				<p>Well this is akward</p>
			</div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>
			<div>
				<ul>
				{items.map(item =>(
					<li style={ItemStyles}>
						<a href={item.url}>
							{item.text}
						</a>
						<p>{item.description}</p>
					</li>
				))}
					
				</ul>
			</div>
		</main>		
		)
}

export default AboutPage