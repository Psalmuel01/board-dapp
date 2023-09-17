//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ColourBoard {
    enum Colour {
        white,
        blue,
        red,
        black
    }

    uint8 constant BOARD_SIZE = 35;
    uint8 constant BOARD_WIDTH = 7; // 7 columns
    uint8 constant BOARD_HEIGHT = 5; // 5 rows

    // mapping to store colours
    mapping(uint => Colour) colours;

    constructor() {
        // Initialize the board with random colors
        for (uint8 i = 0; i < BOARD_SIZE; i++) {
            uint8 pseudoRandom = uint8(
                uint256(
                    keccak256(
                        abi.encodePacked(block.timestamp, i, block.prevrandao)
                    )
                ) % 4
            );
            colours[i] = Colour(pseudoRandom);
        }
    }

    function setColour(uint8 x, uint8 y, Colour colour) public {
        require(x < 7, "Invalid x coordinate");
        require(y < 5, "Invalid y coordinate");
        require(
            colour >= Colour.white && colour <= Colour.black,
            "Invalid colour"
        );

        uint8 index = calculateIndex(x, y);
        colours[index] = colour;
    }

    function getColour(uint8 x, uint8 y) public view returns (Colour) {
        require(x < BOARD_WIDTH, "Invalid x coordinate");
        require(y < BOARD_HEIGHT, "Invalid y coordinate");

        uint8 index = calculateIndex(x, y);
        return colours[index];
    }

    function calculateIndex(uint8 x, uint8 y) internal pure returns (uint8) {
        return y * BOARD_WIDTH + x;
    }
}
