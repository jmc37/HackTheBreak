import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  school: string;
  program: string;
  schoolEmail: string;
  term: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  school,
  program,
  schoolEmail,
  term,
  updateFields,
}: UserFormProps): JSX.Element {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Which school do you attend?</label>
      <select
        value={school}
        onChange={(e) => updateFields({ school: e.target.value })}
      >
        <option value="BCIT">BCIT</option>
        <option value="UBC">UBC</option>
        <option value="SFU">SFU</option>
        <option value="Other">Other</option>
      </select>
      <label>Which program are you in?</label>
      <input
        required
        type="text"
        value={program}
        onChange={(e) => updateFields({ program: e.target.value })}
      />
      <label>School Email</label>
      <input
        required
        type="text"
        value={schoolEmail}
        onChange={(e) => updateFields({ schoolEmail: e.target.value })}
      />
      <label>Term</label>
      <input
        required
        min={1}
        type="number"
        value={term}
        onChange={(e) => updateFields({ term: e.target.value })}
      />
    </FormWrapper>
  );
}
