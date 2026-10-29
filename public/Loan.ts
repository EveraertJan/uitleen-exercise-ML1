

export default class Loan {
  id: number;
  firstName: string;
  toolName: string;
  lentAt: string;
  returnedAt: string;

  loanLength: string;


  constructor(id: number, firstName: string, name: string, lentAt: string, returnedAt: string) {
    this.id = id;
    this.firstName = firstName;
    this.toolName = name;
    this.lentAt = lentAt;
    this.returnedAt = returnedAt;
    this.loanLength = "";
    if(this.returnedAt == null) {
      this.loanLength = "Not returned yet";
    }

  }

  renderHTMLString(): string {
    const htmlString = `
      <tr><td>${this.firstName}</td><td>${this.lentAt}</td><td>${this.loanLength}</td></tr>
    `;

    return htmlString;
  }

}