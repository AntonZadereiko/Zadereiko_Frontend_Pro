const Roles = Object.freeze({
    Admin: 'admin',
    Editor: 'editor',
    Reader: 'reader',
    SuperAdmin: 'superAdmin'
})

class User {
    constructor(id, firstName, lastName, role) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        Object.defineProperty(this, 'role', {
            value: role,
            enumerable: true,
        });
    }
}

console.log(Roles.Admin);
Roles.Admin = 'hello';
Roles.newCondition = 'value';

const editor = new User(1, 'Randy', 'Orton', Roles.Admin);
console.log(editor.role);
console.log(editor.role === Roles.Admin);
editor.role = false;
delete editor.role;