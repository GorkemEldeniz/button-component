import { Routes, Route } from "react-router-dom";
import { Button as ButtonPage } from "./pages/Button/Button";
import Home from "./pages/Home/Home";
import { Colors } from "./pages/Colors/Colors";
import { Grid } from "./pages/Grid/Grid";
import { Spaces } from "./pages/Spaces/Spaces";
import { Inputs } from "./pages/Inputs/Inputs";
import { Typography } from "./pages/Typography/Typography";
import { Layout } from "./components/Layout";
import "./style/index.css";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' index element={<Home />} />
				<Route path='buttons' element={<ButtonPage />} />
				<Route path='colors' index element={<Colors />} />
				<Route path='grid' index element={<Grid />} />
				<Route path='spaces' index element={<Spaces />} />
				<Route path='inputs' index element={<Inputs />} />
				<Route path='typography' index element={<Typography />} />
			</Route>
		</Routes>
	);
}

export default App;
