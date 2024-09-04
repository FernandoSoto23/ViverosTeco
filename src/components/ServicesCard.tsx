
import ButtonInfo from "../components/ButtonInfo";
type ServicesCardProps = {
    title: string,
    img: string,
}
export default function ServicesCard({ title, img }: ServicesCardProps) {
    return (
        <div
            className="w-96 bg-green-50 my-3 rounded-lg py-2"
        >
            <p
                className="text-2xl text-center uppercase font-bold"
            >{title}</p>
            <img
                src={`./img/${img}.jpg`}
                className="w-96 h-96 object-cover bg-no-repeat bg-center "
            />
            <div className="flex items-center justify-center">
                <ButtonInfo />
            </div>

        </div>
    )
}
