import React, {Component} from 'react';
import UserPage from "./components/UserPage"
import './App.css';

var userInfo = [{"id":1,"name":"이정도","username":"jd1386","email":"lee.jungdo@gmail.com","phone":"010-3192-2910","website":"https://leejungdo.com","province":"경기도","city":"성남시","district":"분당구","street":"대왕판교로 160","zipcode":"13525","createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z"}]
var todoInfo = [{"id":1,"title":"모든 국민은 직업선택의 자유를 가진다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":2,"title":"모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":3,"title":"대한민국의 영토는 한반도와 그 부속도서로 한다.","completed":false,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":4,"title":"국가는 평생교육을 진흥하여야 한다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":5,"title":"형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":6,"title":"모든 국민은 양심의 자유를 가진다.","completed":false,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":7,"title":"모든 국민은 인간다운 생활을 할 권리를 가진다.","completed":false,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":8,"title":"모든 국민은 통신의 비밀을 침해받지 아니한다.","completed":false,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":9,"title":"여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.","completed":false,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":10,"title":"근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":11,"title":"대한민국은 민주공화국이다.","completed":false,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":12,"title":"대한민국의 영토는 한반도와 그 부속도서로 한다.","completed":false,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":13,"title":"모든 국민은 학문과 예술의 자유를 가진다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":14,"title":"여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":15,"title":"모든 국민은 거주·이전의 자유를 가진다.","completed":false,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":16,"title":"대한민국은 민주공화국이다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":17,"title":"연소자의 근로는 특별한 보호를 받는다.","completed":false,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":18,"title":"여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":19,"title":"모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1},{"id":20,"title":"형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.","completed":true,"createdAt":"2019-02-24T16:17:47.000Z","updatedAt":"2019-02-24T16:17:47.000Z","UserId":1}]


class App extends Component {
  
  render(){
    return (
      <div className="App">
        <UserPage user = {userInfo} todo = {todoInfo} />
      </div>
    );
  }
}





export default App;
