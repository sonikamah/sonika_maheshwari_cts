import React from "react";
import { shallow, mount } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";
import Cards from './Cards';
import CardInfo from './CardInfo';

describe("PearsonUsers", () => {
  let shallowMe, data;

  const mountMe = (props) => {
    const newProps = {
      ...props
    }
    return mount(<PearsonUsers {...newProps}/>);
  }

  beforeEach(() => {
    var response = {};
    response.data = [{
      id: 7,
      first_name: "Tracey",
      last_name: "Ramos",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    },{
      id: 8,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      id: 8,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    }];

    const mockSuccessResponse = response;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => mockJsonPromise,
    }));

    shallowMe = shallow(<PearsonUsers />);
  });

  it("renders a h1", () => {
    const h1 = shallowMe.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it("Cards component should be present", () => {
    const me = mountMe();
    expect(me.find(Cards).length).toEqual(1);
  });

  it("should Run componentDidMount", () => {
    spyOn(PearsonUsers.prototype, 'componentDidMount')
    const me = mountMe();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(PearsonUsers.prototype.componentDidMount).toHaveBeenCalled();
  });

  it("render a component 'CardInfo' as per userList", () => {
    const me = mountMe();
    expect(me.find(CardInfo).length).toEqual(3);
  });

  it("Remove duplicates from user list", () => {
    const me = mountMe();

    expect('users' in me.state()).toEqual(true)

    // duplicated users are removed from the list
    expect(me.state().users).toEqual([
      {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg", "first_name": "Eve", "id": 4, "last_name": "Holt"}, 
      {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg", "first_name": "Charles", "id": 5, "last_name": "Morris"}, 
      {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg", "first_name": "Tracey", "id": 6, "last_name": "Ramos"}
    ]);

  });

  it("delete user from users list", () => {
    shallowMe.instance().deleteUser("8"); // for id: 8 , deleting the user

    // delete the user whose id is 8
    expect(shallowMe.state().users).toEqual([
      {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg", "first_name": "Eve", "id": 4, "last_name": "Holt"}, 
      {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg", "first_name": "Charles", "id": 5, "last_name": "Morris"}, 
      {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg", "first_name": "Tracey", "id": 6, "last_name": "Ramos"}, 
      {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg", "first_name": "Tracey", "id": 7, "last_name": "Ramos"}]);
  });

  
});
