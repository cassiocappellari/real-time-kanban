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
    const toDoCards = useSelector((state: RootState) => state.toDoCards)
    const inProgressCards = useSelector((state: RootState) => state.inProgressCards)
    const doneCards = useSelector((state: RootState) => state.doneCards)

    return (
        <div className="bg-blue-500 h-screen w-64 border-round text-center rounded">
        <div>
            <p>
                {title}
            </p>
        </div>
        {title === ColumnTitle.TO_DO && 
            toDoCards.map((card, index) => (
                <div className="mt-6">
                    <Card key={index} title={card.cardTitle} currentColumn={card.currentColumn} />
                </div>
            ))
        }

        {title === ColumnTitle.IN_PROGRESS && 
            inProgressCards.map((card, index) => (
                <div className="mt-6">
                    <Card key={index} title={card.cardTitle} currentColumn={card.currentColumn}/>
                </div>
        ))
        }

        {title === ColumnTitle.DONE && 
            doneCards.map((card, index) => (
                <div className="mt-6">
                    <Card key={index} title={card.cardTitle} currentColumn={card.currentColumn}/>
                </div>
            ))
        }
        </div>
    )
}