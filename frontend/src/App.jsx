import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { StrictMode } from "react";

function App() {
	return (
		<StrictMode>
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}  w={"100%"}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage/>} />
			</Routes>
		</Box>
		</StrictMode>
	);
}

export default App;

