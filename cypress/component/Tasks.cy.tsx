import React from 'react';

import Tasks from '@/components/Tasks/Tasks';

describe('Tasks.cy.tsx', () => {
  it('correctly add and delete tasks', () => {
    cy.mount(<Tasks date="23.07.2024" onClose={() => 1} />);
    cy.contains('Add task').click();
    cy.get('input[type=checkbox]').should('have.length', 2);
    cy.get('input[type=text]').should('have.length', 2);
    cy.get('*[data-testid=icon-delete]').first().click();
    cy.get('input[type=checkbox]').should('have.length', 1);
    cy.get('input[type=text]').should('have.length', 1);
  });

  it('typing and checking working', () => {
    cy.mount(<Tasks date="23.07.2024" onClose={() => 1} />);
    cy.get('input[type=text]').first().type('text');
    cy.get('input[type=text]').first().should('have.value', 'text');
    cy.get('input[type=checkbox]').first().click();
    cy.get('input[type="checkbox"]').first().should('be.checked');
  });
});
