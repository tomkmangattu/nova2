import { Card } from "../../Card";
import myImage from '../../../assets/images/house1.jpg';
import { Grid } from "../../Grid";

export const HouseHold = () => {
    const house = {
        title: "Elegant Retreat",
        description: "A Stunning Home Nestled in Nature’s Embrace",
        image: myImage
    }

    const houses = Array(20).fill(house);

    return <div>
        <Grid>
            {houses.map((house, index) => (
                <Card key={index} building={house}></Card>
            ))}
      </Grid>
    </div>
}