//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface Iboard {
    enum Colour {
        transparent,
        white,
        blue,
        red,
        black
    }

    function setColour(uint8 x, uint8 y, Colour colour) external;

    function getColour(uint8 x, uint8 y) external view returns (Colour);
}
