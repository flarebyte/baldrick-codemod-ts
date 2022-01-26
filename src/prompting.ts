import prompts from 'prompts';

export const howAreYou = async () => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    message: 'How old are you?',
    validate: (value: number) => (value < 18 ? `Nightclub is 18+ only` : true),
  });

  console.log(response);
};
