import React, {useEffect, useState} from 'react';
import Card from "../../components/UI/Card";
import Layout from "../../components/UI/Layout/Layout";

const Drivers = () => {
    const [drivers, setDrivers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('/api/drivers')
            .then(res => {
                return res.json()
            }).then(response => {
            setDrivers(response.data)
        });
    }, []);


    const overTake = id => {
        fetch('api/drivers/' + id + '/overtake').then(res => {
            return res.json()
        }).then(response => {
            setDrivers(response.data)
        });

    }

    return (
        <Layout>
            <div className={'grid md:grid-cols-2 justify-center xl:grid-cols-3 gap-10 mx-10 w-full my-10'}>
                {drivers && drivers.map(driver => <Card key={driver.id}
                                                        driver={driver}
                                                        overTake={overTake}/>)}
            </div>
        </Layout>

    );
};

export default Drivers;
