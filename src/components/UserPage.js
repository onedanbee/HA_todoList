import React, { Component } from 'react';
import User from "./User";
import Todo from "./Todo"

const id = 1;

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTodoPage: true
            , todo: [{ "id": 2, "title": "모든 국민은 법 앞에 평등하다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 22, "title": "국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.", "completed": false, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 23, "title": "공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 24, "title": "정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.", "completed": false, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 25, "title": "모든 국민은 직업선택의 자유를 가진다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 26, "title": "누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.", "completed": false, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 27, "title": "국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다.", "completed": false, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 28, "title": "국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 29, "title": "모든 국민은 직업선택의 자유를 가진다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 30, "title": "모든 국민은 법 앞에 평등하다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 31, "title": "형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.", "completed": false, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 32, "title": "모든 국민은 거주·이전의 자유를 가진다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 33, "title": "대한민국의 영토는 한반도와 그 부속도서로 한다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 34, "title": "대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 35, "title": "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.", "completed": false, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 36, "title": "형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 37, "title": "대한민국은 민주공화국이다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 38, "title": "주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 39, "title": "국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다.", "completed": true, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }, { "id": 40, "title": "모든 국민은 학문과 예술의 자유를 가진다.", "completed": false, "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z", "UserId": 2 }]
            , user: { "id": 2, "name": "김재완", "username": "lastrites2018", "email": "jaewan@gmail.com", "phone": "02-879-5000", "website": "https://github.com/lastrites2018", "province": "", "city": "서울특별시", "district": "관악구", "street": "관악로 145", "zipcode": "08832", "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z" }
        }
        this.handleClick = this.handleClick.bind(this)
    }

    fetchUserAndTodo = async () => {  //callback 이용하기
        const objToChange = {}
        let res = await fetch(`https://koreanjson.com/users/${id}`)
        objToChange.user = await res.json();
        res = await fetch(`https://koreanjson.com/todos?userId=${id}`)
        objToChange.todo = await res.json();
        this.setState({...objToChange})
        // .then(response => response.json())
        // .then(json => {objToChange.user=json;return})
        // .then(()=>{
        //     .then(response => response.json())
        //     .then(json => objToChange.todo=json)
        //     .then(()=>that.setState(...objToChange))
        // })
        
        // .catch(error => console.log(error))
        
            
    }

    componentDidMount() {
        this.fetchUserAndTodo()
    }

    handleClick(isTodoButton) {
        const { isTodoPage } = this.state;
        if (isTodoButton !== isTodoPage) {
            this.setState({
                isTodoPage: !isTodoPage
            });
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => this.handleClick(false)}>유저프로필</button>
                <button onClick={() => this.handleClick(true)}>투두</button>
                {this.state.isTodoPage ? <Todo todo={this.state.todo} /> : <User user={this.state.user} />}
            </div>
        );
    }
}

export default UserPage;