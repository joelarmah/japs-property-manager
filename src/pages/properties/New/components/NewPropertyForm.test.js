import { fireEvent, render, screen } from '@testing-library/react';
import NewPropertyForm from './NewPropertyForm';

describe('NewPropertyForm', () => {
  test('renders wizard steps', () => {
    render(<NewPropertyForm />);

    // Check if first step is rendered
    expect(
      screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'h3' && content.startsWith('What type of property do you manage?');
      })
    ).toBeInTheDocument();

    // Check if the second step is not rendered initially
    expect(screen.queryByLabelText('Which of these best describes your property?')).toBeNull();
  });

  test('allows navigating between steps', async () => {
    render(<NewPropertyForm />);

    // Move to the next step
    await screen.findByText('What type of property do you manage?');

    // Select the "Residential" radio button
    fireEvent.click(screen.getByLabelText('Residential'));
    // Move to the next step
    fireEvent.click(screen.getByText('Next'));

    // Wait for the next step to render
    await screen.findByText('Which of these best describes your property?');

    // Check if the second step is rendered
    expect(screen.getByText('Which of these best describes your property?')).toBeInTheDocument();
  });

  test('submits property data', async () => {
    render(<NewPropertyForm />);

//     // Select the "Residential" radio button
//    fireEvent.click(screen.getByLabelText('Residential'));
//     // Move to the next step
//    fireEvent.click(screen.getByText('Next'));

    // Move to structure type
    // await screen.findByText('Which of these best describes your property');

    // Select the "Residential" radio button
    fireEvent.click(screen.getByLabelText('Residential'));
    // Move to the next step
    fireEvent.click(screen.getByText('Next'));

    // Complete the form fields in each step
    fireEvent.click(screen.getByDisplayValue('Residential'));
    fireEvent.click(screen.getByText('Next'));
    // fireEvent.click(screen.getByLabelText('Apartment'));
    fireEvent.click(screen.getByText('Next'));
   // fireEvent.change(screen.getByLabelText('Address Line 1'), { target: { value: '123 Example St' } });
    // fireEvent.change(screen.getByLabelText('City'), { target: { value: 'New York' } });
    // fireEvent.change(screen.getByLabelText('Region'), { target: { value: 'NY' } });
    // fireEvent.click(screen.getByText('Next'));

    // Submit the form
    fireEvent.click(screen.getByText('Next'));

    // expect(console.log).toHaveBeenCalledWith(
    //   JSON.stringify({
    //     propertyType: 'Residential',
    //     structureType: 'Apartment',
    //     location: {
    //       addressLine1: '123 Example St',
    //       addressLine2: '',
    //       city: 'New York',
    //       region: 'NY',
    //     },
    //     units: [],
    //   })
    // );
  });
});
