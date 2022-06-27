import React from 'react';
import Cartouche from "./Cartouche";

interface IBlock {
    title: string;
    duration: string;
    company: string;
    description: string;
    dateStart: number;
    dateEnd?: number;
    stack: string[];
    tasks: string[];
}

const Block = (data: IBlock) => {
    return (
        <section className="blocks">
            <div className="date">
                <span>{data.dateEnd ? data.dateEnd : "    "}</span><span>{data.dateStart}</span>
            </div>
            <div className="decorator">
            </div>
            <div className="details">
                <header>
                    <span className="header-title">{data.title}</span>
                    <span className="header-time"> {data.duration}</span>
                    <span className="location">{data.company}</span>
                </header>
                <div>
                    {data.description}

                    {
                        data.tasks.length > 0 &&
                            <div className="pl-5">
                                {
                                     data.stack.map((d: string) => {
                                        return (Cartouche(d, "XS"))
                                    })
                                }
                                {
                                    data.tasks.length > 0 &&
                                        <div className="pl-5">
                                            {
                                                data.tasks.map((d: string) => {
                                                    return (
                                                        <span>
                                                    {d}
                                                            <br/>
                                                </span>
                                                    )
                                                })
                                            }
                                        </div>
                                }
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Block;
