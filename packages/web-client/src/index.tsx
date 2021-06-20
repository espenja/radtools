import React from "react"
import { render } from "react-dom"
import App from "./App"

const analytics = () => import("analytics")
analytics().then(({ initAnalytics }) => initAnalytics())

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("app")
)
