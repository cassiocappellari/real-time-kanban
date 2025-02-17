import { Card } from "./Card";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ColumnTitle } from "../enums";

interface Props {
    title: string;
}

export function Column({ title }: Props) {
    const toDoCards = useSelector((state: RootState) => state.toDoCards);
    const inProgressCards = useSelector((state: RootState) => state.inProgressCards);
    const doneCards = useSelector((state: RootState) => state.doneCards);

    return (
        <div className="flex flex-col items-center w-72 rounded-xl p-5 shadow-lg">
            <h2 className="text-lg font-bold uppercase tracking-wide mb-4">
                {title}
            </h2>
            <div className="w-full space-y-4">
                {title === ColumnTitle.TO_DO &&
                    toDoCards.map((card, index) => (
                        <Card key={index} title={card.cardTitle} currentColumn={card.currentColumn} />
                    ))
                }
                {title === ColumnTitle.IN_PROGRESS &&
                    inProgressCards.map((card, index) => (
                        <Card key={index} title={card.cardTitle} currentColumn={card.currentColumn} />
                    ))
                }
                {title === ColumnTitle.DONE &&
                    doneCards.map((card, index) => (
                        <Card key={index} title={card.cardTitle} currentColumn={card.currentColumn} />
                    ))
                }
            </div>
        </div>
    );
}
