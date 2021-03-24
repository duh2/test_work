import {render} from "react-dom";
import {User} from "./listOfUsers";
import {UserCard} from "./userCard";

interface UserCardListProps {
    data: Array<User>;
}

export const UserCardList: React.FC<UserCardListProps> = (props: UserCardListProps) => {

    return (
        <div className='listOfUsers'>
            {props.data.map((user: User) =><UserCard user={user} />)}
        </div>
    )


}