import { Card } from "./Card";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ColumnTitle } from "../enums";

interface Props {
    title: string;
}

export function Column({
    title
}: Props) {
    const cards = useSelector((state: RootState) => state.cards)

    return (
        <div className="bg-blue-500 h-screen w-64 border-round text-center rounded">
        <div>
            <p>
                {title}
            </p>
        </div>
        {title === ColumnTitle.TO_DO && 
         cards.map((title, index) => (
            <div className="mt-6">
                <Card key={index} title={title}/>
            </div>
        ))
        }
        </div>
    )
}