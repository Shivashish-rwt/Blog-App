import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import Missing from "./Missing";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { DataProvider } from "./Context/DataContext";

function App() {
	return (
		<div className="App">
			<Header title="React JS Blog" />
			<DataProvider>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post" element={<NewPost />} />
					<Route path="/edit/:id" element={<EditPost />} />
					<Route path="/post/:id" element={<PostPage />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Missing />} />
				</Routes>
			</DataProvider>
			<Footer />
		</div>
	);
}

export default App;
