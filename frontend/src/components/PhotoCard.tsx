import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type PhotoCardProps = {
	photo: string;
	alt?: string;
};

function PhotoCard({ photo, alt = "Photo" }: PhotoCardProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div
					className="flex w-full cursor-pointer rounded-2xl transition-all duration-300 ease-out
          hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
				>
					<img src={photo} alt={alt} className="w-full object-cover rounded-2xl" />
				</div>
			</DialogTrigger>

			<DialogContent
				className="
  p-0 border-none
  bg-black/80 backdrop-blur-md
  flex items-center justify-center
        "
				showCloseButton={false}
			>
				<img src={photo} alt={alt} className="max-w-[95vw] max-h-[95vh] object-contain rounded-2xl shadow-2xl" />
			</DialogContent>
		</Dialog>
	);
}

export default PhotoCard;
