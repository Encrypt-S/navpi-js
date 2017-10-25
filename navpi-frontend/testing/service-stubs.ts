


/*
export class AuthServiceStub {

  isAuthenticated() {
    return true;
  }

}

export class AngularFireAuthStub {

  public auth = {createUserWithEmailAndPassword: {}};

  constructor() {

    this.auth.createUserWithEmailAndPassword = (email, password) => {

      return {uid: '1234'};

    };

  }
}


export class UserServiceStub {

  createUser() {
    return {};
  }

}

export class AccountServiceStub {

  createAccount() {
    return {key: '589s'};
  }

  attachUserToAccount() {
    return {};
  }

}


export class CreateAccountCommandStub {

  execute(data) {

    return {};

  }

}


export class AngularFireDatabaseStub {}




export class NoteServiceStub {

  getOrgNotes(accId:string, orgId:string) {

  }
}

export class ServerServiceStub {}

export class CreateAccountCommandStub {}

export class AngularFireAuthStub {
  public login(obj) {
    let p=  new Observable((ob) => {
      ob.next({uid:'123'} as FirebaseAuthState);
      ob.complete();
    }).toPromise();

    return p;
  }
  public logout() {  }
}

export class AngularFireStub {
  public auth: AngularFireAuthStub = new AngularFireAuthStub();
}

export class UserServiceStub {

  getUIDFromEmailHash(email:string):Observable<string> {

    return new Observable((obs) => {

      let d:any = {};
      d.$exists = function(){
        return true
      };

      obs.next(d);
      obs.complete();

    });
  }

}

export class InviteServiceStub {

  getInvites(accountId:string) {

    let d:any = {};
    d.$exists = function(){
      return true
    };

    return new Observable((obs) => {
      obs.next(d);
      obs.complete();

    });

  }

  getInvite(accountId:string, inviteId:string) {

    return new Observable((obs) => {
      let d:any = {};
      d.$exists = function(){
        return true
      };

      obs.next(d);
      obs.complete();
    });

  }

}


export class AccountServiceStub {

  getStoredAccountUser() {
    return new UserStore();
  }

}

export class CreateOrgCommandStub {

}

export class RemoveOrgCommandStub {

}

export class InviteUserToAccountCommandStub {

  execute(){
    return new Observable((obs) => {} );
  };

}

export class RemoveUserFromAccountCommandStub {}

export class RemoveUserFromOrgCommandStub {}

export class AddUserToOrgCommandStub {}



export class OrgServiceStub {

  testName = '';


  public findOrdById(orgId:string): OrgStore {

    let os = new OrgStore();
    os.name = this.testName;

    return os;
  }
}


// modal services
export class EditOrgModalServiceStub {
  showModalSubj = new BehaviorSubject(false);
  showModal() {};
}

export class CreateOrgModalServiceStub {
  showModalSubj = new BehaviorSubject(false);
  showModal() {};
}


export class CreateUserModalServiceStub {
  showModalSubj = new BehaviorSubject(false);
  showModal() {};
}



export class RemoveUserFromOrgModalServiceStub {
  showModalSubj = new BehaviorSubject(false);
  showModal() {};
}

export class AddAdviserModalServiceStub {
  showModalSubj = new BehaviorSubject(false);
  showModal() {};
}


export class EditUserModalServiceStub {
  showModalSubj = new BehaviorSubject(false);
  showModal() {};
}


*/


