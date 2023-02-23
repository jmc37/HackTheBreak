import { FormWrapper } from "./FormWrapper";

type AccountData = {
  goal: string;
  team: string;
  food: string;
  strengths: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  goal,
  team,
  food,
  strengths,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>What do you hope to achieve by attending?</label>
      <input
        required
        type="text"
        value={goal}
        onChange={(e) => updateFields({ goal: e.target.value })}
      />
      <label>Are you joining as a team or an individual?</label>
      <select
        value={team}
        onChange={(e) => updateFields({ team: e.target.value })}
      >
        <option value="Team">Team</option>
        <option value="Individual">Individual</option>
      </select>
      <label>What is your gender?</label>
      <select
        value={food}
        onChange={(e) => updateFields({ food: e.target.value })}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-binary">Non-binary</option>
        <option value="Other">Other</option>
        <option value="Prefer Not to Say">Prefer Not to Say</option>
      </select>
      <label>What are some of your strengths?</label>
      <input
        required
        type="text"
        value={strengths}
        onChange={(e) => updateFields({ strengths: e.target.value })}
      />
    </FormWrapper>
  );
}
