import { exitdocument } from "./exitdocument.js";

class newdocument {
  constructor(proto) {
    this.proto = proto;
  }

  clone() {
 
    return new exitdocument(
      this.proto.header,
      this.proto.footer,
      this.proto.page,
      this.proto.text
    );
  }
}


let exdocument = new exitdocument(
  "exitdocument header",
  "exitdocument footer",
  "exitdocument page",
  "exitdocument text"
);


let nwdocument = new newdocument(exdocument);
let proto = nwdocument.clone();

console.log(proto.getDetails());
