import React from 'react';
import { render } from '@testing-library/react';
import GameHeader from '../GameHeader.component';
const { mockGameData } = require('./testData');

describe('Header component', () => {

  describe('On opening the application', () => {
    it('renders the first entry as the header', () => {
      const { getAllByTestId } = render(
        <GameHeader 
          rawgGameData={mockGameData} 
          rawgGameDataIndex={0}
        />
      );
      const firstEntryName = mockGameData[0].name;
      const header = getAllByTestId('game-header')[0].textContent;
      
      expect(header).toBe(firstEntryName)
    })

  })
})