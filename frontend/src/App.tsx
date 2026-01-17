import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { ThemeProvider } from "./components/theme-provider";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<HashRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</HashRouter>
		</ThemeProvider>
	);
}

export default App;
