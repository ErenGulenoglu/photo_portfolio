import PhotoCard from "../components/PhotoCard";
import Footer from "../components/Footer";
import { useEffect } from "react";

import photo1 from "../assets/photos/DSC03137.jpg";
import photo2 from "../assets/photos/DSC03167.jpg";
import photo3 from "../assets/photos/DSC03248.jpg";
import photo4 from "../assets/photos/DSC03441.jpg";
import photo5 from "../assets/photos/DSC03466.jpg";
import photo6 from "../assets/photos/DSC03543.jpg";
import photo7 from "../assets/photos/DSC03663.jpg";
import photo8 from "../assets/photos/DSC03945.jpg";
import photo9 from "../assets/photos/DSC04274.jpg";
import photo10 from "../assets/photos/DSC04429.jpg";
import photo11 from "../assets/photos/DSC04435.jpg";
import photo12 from "../assets/photos/DSC04566.jpg";
import photo13 from "../assets/photos/DSC04657.jpg";
import photo14 from "../assets/photos/DSC04708.jpg";
import photo15 from "../assets/photos/DSC04722.jpg";
import photo16 from "../assets/photos/DSC04782.jpg";
import photo17 from "../assets/photos/DSC04835.jpg";
import photo18 from "../assets/photos/DSC05063.jpg";
import photo19 from "../assets/photos/DSC05089-2.jpg";
import photo20 from "../assets/photos/DSC05169.jpg";
import photo21 from "../assets/photos/DSC05205.jpg";
import photo22 from "../assets/photos/DSC05249.jpg";
import photo23 from "../assets/photos/DSC05400.jpg";
import photo24 from "../assets/photos/DSC05433-2.jpg";
import photo25 from "../assets/photos/DSC05467.jpg";
import photo26 from "../assets/photos/DSC05478-2.jpg";
import photo27 from "../assets/photos/DSC05576.jpg";
import photo28 from "../assets/photos/DSC05672-2.jpg";
import photo29 from "../assets/photos/DSC05761.jpg";
import photo30 from "../assets/photos/DSC05864.jpg";
import photo31 from "../assets/photos/DSC05919.jpg";
import photo32 from "../assets/photos/DSC06089.jpg";
import photo33 from "../assets/photos/DSC06098.jpg";
import photo34 from "../assets/photos/DSC06264.jpg";
import photo35 from "../assets/photos/DSC06277.jpg";
import photo36 from "../assets/photos/DSC06383.jpg";
import photo37 from "../assets/photos/DSC06438.jpg";
import photo38 from "../assets/photos/DSC06696.jpg";
import photo39 from "../assets/photos/DSC06933.jpg";
import photo40 from "../assets/photos/DSC06933.jpg";
import photo41 from "../assets/photos/DSC06937.jpg";
import photo42 from "../assets/photos/DSC06989-4.jpg";
import photo43 from "../assets/photos/DSC07006-2.jpg";
import photo44 from "../assets/photos/DSC07291.jpg";
import photo45 from "../assets/photos/DSC07356.jpg";
import photo46 from "../assets/photos/DSC07376.jpg";
import photo47 from "../assets/photos/DSC07386.jpg";
import photo48 from "../assets/photos/DSC07500.jpg";
import photo49 from "../assets/photos/DSC07539.jpg";
import photo50 from "../assets/photos/DSC07662.jpg";
import photo51 from "../assets/photos/DSC07818-2.jpg";
import photo52 from "../assets/photos/DSC08102-3.jpg";

function Home() {
	useEffect(() => {
		document.title = "Gokben Sahinkayasi - Portfolio";
	});
	return (
		<div className="flex w-full justify-center items-center flex-col">
			<div className="flex flex-col w-full items-center justify-center h-[12vh] gap-4">
				<h3 className=" font-semibold text-4xl">Gokben Photography</h3>
			</div>
			<main className="flex w-[95vw] flex-col gap-4 lg:w-[65vw] md:flex-row">
				<div className="flex w-full flex-col gap-4 md:w-1/3">
					<PhotoCard photo={photo1} alt="photo" />
					<PhotoCard photo={photo4} alt="photo" />
					<PhotoCard photo={photo7} alt="photo" />
					<PhotoCard photo={photo10} alt="photo" />
					<PhotoCard photo={photo13} alt="photo" />
					<PhotoCard photo={photo16} alt="photo" />
					<PhotoCard photo={photo19} alt="photo" />
					<PhotoCard photo={photo22} alt="photo" />
					<PhotoCard photo={photo25} alt="photo" />
					<PhotoCard photo={photo28} alt="photo" />
					<PhotoCard photo={photo31} alt="photo" />
					<PhotoCard photo={photo34} alt="photo" />
					<PhotoCard photo={photo37} alt="photo" />
					<PhotoCard photo={photo40} alt="photo" />
					<PhotoCard photo={photo43} alt="photo" />
					<PhotoCard photo={photo46} alt="photo" />
					<PhotoCard photo={photo49} alt="photo" />
				</div>
				<div className="flex w-full flex-col gap-4 md:w-1/3">
					<PhotoCard photo={photo2} alt="photo" />
					<PhotoCard photo={photo5} alt="photo" />
					<PhotoCard photo={photo8} alt="photo" />
					<PhotoCard photo={photo11} alt="photo" />
					<PhotoCard photo={photo14} alt="photo" />
					<PhotoCard photo={photo17} alt="photo" />
					<PhotoCard photo={photo20} alt="photo" />
					<PhotoCard photo={photo23} alt="photo" />
					<PhotoCard photo={photo26} alt="photo" />
					<PhotoCard photo={photo29} alt="photo" />
					<PhotoCard photo={photo32} alt="photo" />
					<PhotoCard photo={photo35} alt="photo" />
					<PhotoCard photo={photo38} alt="photo" />
					<PhotoCard photo={photo41} alt="photo" />
					<PhotoCard photo={photo44} alt="photo" />
					<PhotoCard photo={photo47} alt="photo" />
					<PhotoCard photo={photo50} alt="photo" />
					<PhotoCard photo={photo52} alt="photo" />
				</div>
				<div className="flex w-full flex-col gap-4 md:w-1/3">
					<PhotoCard photo={photo3} alt="photo" />
					<PhotoCard photo={photo6} alt="photo" />
					<PhotoCard photo={photo9} alt="photo" />
					<PhotoCard photo={photo12} alt="photo" />
					<PhotoCard photo={photo15} alt="photo" />
					<PhotoCard photo={photo18} alt="photo" />
					<PhotoCard photo={photo21} alt="photo" />
					<PhotoCard photo={photo24} alt="photo" />
					<PhotoCard photo={photo27} alt="photo" />
					<PhotoCard photo={photo30} alt="photo" />
					<PhotoCard photo={photo33} alt="photo" />
					<PhotoCard photo={photo36} alt="photo" />
					<PhotoCard photo={photo39} alt="photo" />
					<PhotoCard photo={photo42} alt="photo" />
					<PhotoCard photo={photo45} alt="photo" />
					<PhotoCard photo={photo48} alt="photo" />
					<PhotoCard photo={photo51} alt="photo" />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
