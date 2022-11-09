import React from 'react';

const Card = ({driver, overTake}) => {

    return (
        <div
            className={" pt-10 shadow-xl rounded-xl bg-slate-200 grid grid-cols-3 w-fit items-end justify-between hover:bg-slate-300 transition-all"}>
            <img src={'/images/' + driver.code + '.png'} alt={driver.firstname + ' ' + driver.lastname}
                 className={'w-40'}/>
            < div className="flex h-full flex-col col-span-2 gap-2 mb-3">
                <div className="text-xl">
                    Place: {driver.place}
                </div>
                <div className="font-black">
                    {driver.firstname} {driver.lastname}
                </div>
                <div className=""><img src={'https://countryflagsapi.com/svg/' + driver.country} alt={driver.country}
                                       className={'h-5'}/></div>
                <div className="">{driver.code}</div>
                <div className="font-bold">{driver.team}</div>
                {driver.place !== 1 && <div
                    className="px-4 py-2 bg-amber-400 w-fit uppercase font-bold rounded-full hover:bg-amber-500 hover:shadow-xl hover:scale-105 transition-all"
                    onClick={() => overTake(driver.id)}>overtake</div>}
            </div>

        </div>
    );
};

export default Card;
