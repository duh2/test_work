import {render} from "react-dom";
import {User} from "./listOfUsers";

interface UserCardListProps {
    data: Array<User>;
}

export const UserCardList: React.FC<UserCardListProps> = (props: UserCardListProps) => {

    return (
        <div className='listOfUsers'>
            {props.data.map((user: User) => <div className='userPlate'>
                Name: {user.login}
            </div>)}
        </div>
    )


}