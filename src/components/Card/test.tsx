import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Card from '.';

describe('<Card />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Card title="title" img="/img/logo.svg" />
    );

    expect(
      screen.getByRole('img', { name: /thumbnail of title/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
