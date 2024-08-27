import React from 'react';

import DatePicker from '@/components/DatePicker/DatePicker';
import theme from '@/constants/theme';

const hexToRgb = (hex: string) => {
  const rValue = parseInt(hex.substring(1, 3), 16);
  const gValue = parseInt(hex.substring(3, 5), 16);
  const bValue = parseInt(hex.substring(5), 16);
  return `rgb(${rValue}, ${gValue}, ${bValue})`;
};

describe('DatePicker.cy.tsx', () => {
  it('test arrows', () => {
    const date = new Date(Date.UTC(2024, 7, 20));
    cy.mount(<DatePicker select="date" value={date} date={date} />);
    cy.contains('August 2024').should('be.visible');
    cy.get('*[data-testid=icon-next]').click();
    cy.contains('September 2024').should('be.visible');
    cy.get('*[data-testid=icon-prev]').click();
    cy.contains('August 2024').should('be.visible');
  });

  it('test selection and clearing', () => {
    const date = new Date(Date.UTC(2024, 7, 20));
    cy.mount(<DatePicker select={'date'} value={date} />);
    cy.contains('7').click();
    cy.contains('7').should(
      'have.css',
      'background-color',
      hexToRgb(theme.colors.bgSelectedCell)
    );
    cy.contains('Clear').click();
    cy.contains('7').should(
      'have.css',
      'background-color',
      hexToRgb(theme.colors.bgPrimary)
    );
  });

  it('test task modal opening', () => {
    const date = new Date(Date.UTC(2024, 7, 20));
    cy.mount(<DatePicker date={date} tasks={true} />);
    cy.contains('7').dblclick();
    cy.contains('Tasks').should('be.visible');
  });
});
