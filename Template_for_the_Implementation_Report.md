# Implementation Report

## Individual Contributions

The following table summarizes the actual contributions of each group member, including deviations from the planned responsibilities.
The "implemented components" column should only include major contributions to the respective components (i.e., no bugfixes or small additions to existing components).

| Member      | Implemented Components                                                                                                                                                                                                                                                                          | Testing Contributions                                                                                                                                | Additional Work                                                                                                                                                                                                                                                                                                                                                                              |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Paul Rauber | Created skeleton for and implemented individual plants,created control flow calculate harvest functions, init/reset Plantations, resetsunlight and moisture calculation, created Constants and the plant enum                                                                                   | Created a simple Unittest for the Mapparser, Unittests for the MachineMap and simple Systemtest for validation, moisture and harvest                 | Bugfixing of plants, creating Json maps and farms to prepare system tests                                                                                                                                                                                                                                                                                                                    |
| Alex        | MapParser, TileFactory, Tile package, action type enum                                                                                                                                                                                                                                          | PlantTests Unit Tests, Plant package debugging, MapParser debugging, Farms and Harvest Estimate System Tests                                         | Adding Constants too the Constant.kt                                                                                                                                                                                                                                                                                                                                                         |
| Marco       | First SowingPlan, FarmsParser, machineController (priorityLevelOne, actionSequence, assignActionToMachine, addHarvest, updateTiles, partially returnMachineToShed), EnvironmentMap, MachineMap(updateTiles), Simulation (init, tick), FarmableTile(getPossiblePlants)                           | All incident unit tests, incidentController unit test, starting with incident system tests                                                           | Some skeletons at the beginning, MachineMap(getTilesInRange), SimMap(getTileByIdSafe, remove isTraversability), MapParser(bugfixing, reviewing), MachineController(reviewing/fixing act), Incidents(bug fixing), some jsons for systemtests, ScenarioParser(debugging/fixing)                                                                                                                |
| Nabin       | `EnvironmentController` (cloud-specific functions),<br/>`Cloud` class,<br/>`Machine` class,<br/>BFS with `isTraversable()` method in `MachineMap.kt` and<br/> `getTilesInRange()` method in `SimMap.kt`                                                                                         | wrote comprehensive unit and integration tests for the `Machine` and `MachineController` classes, and is writing system tests for these classes.     | Got rid of multiple infinite loops in `MachineController`                                                                                                                                                                                                                                                                                                                                         ||     |                                                                                                                                                                                                                                                                       |                                                          | [Describe additional work here]      |
| Ege         | Farms package, The PlantSrategy, AnnualStrategy, PerennialStrategy abstract classes, MachineController (startActionPhase, assignMachineToAction, act, checkForFurtherSowingInstructions, moveMachine, performFarmActions, executeSowingPlans, executeSingleSowingPlan, setTickInfoData), Logger | Unit tests for Farm, Integration and System tests for EnvironmentController                                                                          | Generated a preliminary skeleton with the help of GPT5 and restructured it to be usable. Created a SystemTestHelper class to avoid manual log typing in system testing. Debugging in EnvironmentController.                                                                   |
| Raj           | `Incidents` package, `IncidentController`, `ScenarioParser`, `Parser`, `Main.kt`, `printStatistics()` method in `Simulation`, `getAllTilesInRange()` and `getCoordInRange()` methods in `SimMap` and `InvalidFileException`                                                                     | - System tests for machine traversal, harvest estimate reduction, sowing actions, incidents, map  and farms validation<br/>- Unit tests for `SimMap` | - Added PrintWriter to `Logger`, added calculation for total remaining harvest estimate in `SimMap` and added `Constants` for parsing.<br/>- Minor fixes in `Logger`, `MapParser`, `FarmsParser`, `SimulationData`, `Simulation`, `MachineController`, `EnvirontmentController`,  `EnvironmentMap`, `PlantStrategy`, `Tile` and `FarmableTile`. |

---

## Adjustments from the Implementation Plan


- Added multiple helper functions to plants, to schedule actions, lookup the next tick corresponding to a yeartick x, handle sowing seperatedly, and iterate penalties. Seperated resetting and init. plantations into multiple functions, handling plantation harvesting, by not removing them anymore, init. plantations no dont happen while parsing, more data now stored in enums.

- MapParser:
  - Added Serialized classes to the file for parsing with kotlinx
  - Added preValidateTile function to the MapParser class that removes the prevalidation complexity from the parseTile function into a seperate helper function
  - Added private preValidation functions to the mapParser that get invoked before calling to the tile factory
    - validateCoordinates(), validateAirflowAndDirection(), validateCapacity(), validatePlant(), validatePossiblePlants(), validateShed(), validateAirflowOcta(), validateAirflowSqua(), validateNeighbourCheck()
- TilePackage:
  - Farmable Tile: added helper functions to the Farmable tiles class to remove complexity from the function
    - checkBelowThreshold()
- TileFactory:
  - added list of possible plants to the arguments passed to the tile factory, because they were needed but missing
- Removed IncidentFactory because it was not needed
- Parser: added companion object with `validateSchema()` method for use in all parsers
- Added `InvalidFileException` for propagating the result of an unsuccessful parsing up to the `main()` function where we eventually exit the process.
- Added helper functions in `Main.kt` for compatibility with detekt rules.
- Added PrintWriter to the `Logger` and a setter function for the same.
- Created a `Constants.kt` file containing an object with all constants used in the project to avoid magic numbers.

### Taking over Sadig's components
- TODO
---

## Detailed Timeline

For each student, this section should provide a detailed day-by-day timeline of their activities and progress.

### Paul_Rauber

- **Day 1:**
- Plant Skeleton for the subclasses, added plant Enums and Constants, implemented functionality concerning Harvest calculation
- Implemented a first almond prototype
- **Day 2:**
- implemented the individual plant functions aswell as the plant control function calculate Harvest, added Logging to the env. contr.
- **Day 3:**
- added env controller functions reduced moisture, resetBaseSunlight, aswell as finished the calculateHarvest in env. controller
- prepared files for Unit test of machineMap and the mapParser
- **Day 4:**
- Unit testing the Machine map, bug fixing in plants
- **Day 5:**
- Further bugFixing of the Plants, and the machineMap, adding inbuilt queue structure
- **Day 6:**
- Created bigMap, started system testing for validation, printing and moisture redux
### Alex

- **Day 1:** Working on Mapparser. Added action type enum. Implementing preValidation functions for the tiles
- **Day 2:** Working on Mapparser. Implementing crossValidation functions. Implemented the TileFactory. Started working on Tile package
- **Day 3:** Finished working on Tile package. Started working on Plant Strategy unit tests for every plant strategy
- **Day 4:** working on Plantstrategy unit tests
- **Day 5:** working on Plantstrategy unit tests, debugging Plantstrategy, debugged Mapparser after parsing tests failed
- **Day 6:** finished working on Plantstrategy unit tests, debugging Plantstartegy, started working on farm/machine and harvest calculation system tests

### Marco
- **Day 1:** FarmsParser, Sowing plan, some skeletons
- **Day 2:** MachineController, EnvironmentMap, SimMap changes, MachineMap changes, Simulation init and tick
- **(ill) Day 3:** MachineController, MapParser review/debug, some fixes
- **(ill) Day 4:** UnitTests for Incident and IncidentController, MachineController fixes
- **(ill) Day 5:** fixes in FarmsParser and added missing validation, AnimalAttack and BeeHappy test fixes(changes in implementation)
- **Day 6:** FarmsParser fixes, system tests for incidents, some jsons

### Nabin

- **Day 1: September 18, 2025**
    * Initiated development on the `EnvironmentController` by implementing cloud-specific functions.
    * Created and implemented the `Cloud` class, defining its core functionalities.
    * Implemented the `Machine` class
    * Added necessary method skeletons in other classes to support the `EnvironmentController`.

- **Day 2: September 19, 2025**
    * Extended the functionality of the `Machine` class.
    * Implemented the `getTilesinRange()` and `getTilesinRange1()` methods within `SimMap.kt`.
    * Developed a Breadth-First Search (BFS) implementation using the `isTraversable()` method in `MachineMap.kt`.
    * Began writing unit tests for the `MachineController` and `Machine` classes.
    * Refactored the `EnvironmentController` to eliminate hardcoded "magic numbers," improving code readability and maintainability.

- **Day 3: September 22, 2025**
    * Dedicated time to learn more about **mocking** and advanced unit testing techniques.
    * Expanded unit tests and initiated an integration test for the `MachineController`.
    * Experimented with writing an integration test using real objects instead of mocks.
    * Resolved minor `detekt` issues.

- **Day 4: September 23, 2025**
    * Refactored the `MachineController` tests to ensure proper usage of mocking.
    * Fixed remaining `detekt` issues, enabling a successful system build.
    * Concluded the day with a line coverage of **73%** and branch coverage of **45%** for the `MachineController` class.

- **Day 5: September 24, 2025**
    * Extended the test suite for both the `Machine` and `MachineController` classes.
    * Collaborated with teammates to fix bugs identified during testing in both the `MachineController` and `EnvironmentController`.
    * Corrected the logging order for cloud movement and dissipation within the `EnvironmentController`.
    * Achieved a final line coverage of **98%** and branch coverage of **78%** for the `MachineController`, along with **100%** line coverage and **100%** branch coverage for the `Machine` classes.

- **Day 6: September 25, 2025**
    * Developed additional integration tests to verify the interaction between the `Machine` and `MachineController`.
    * Began writing system tests for the `MachineController` after gaining a foundational understanding of system testing methodologies.
    * Wrote system tests for `Machine` class's Irrigation functions and successfully found multiple bugs related to sowing and irrigating.
    * Fixed or helped to fix the identified bugs.

- **Day 7: September 26, 2025**(and over the weekend)
    * Fixed the checkForSimiarActions() return order.
    * Fixed the bug concerning cloud placement on a village tile.
    * Fixed a critical bug that incorrectly allowed sowing and irrigation to occur on the same tick.
    * Fixed an infinite loop bug that occurred when the sowing plan consisted of only unreachable tiles.
    * Fixed the action continuation bug within checkForSimilarActions().
    * Wrote system tests for sowing and irrigation, specifically focusing on action sequencing and **reducing** the number of **timeouts** to just 1.
    * Found my first **mutant**: Overtime.

- **Day 8: September 29, 2025**
    * Changed failing tests to validate the hypothesis that no two actions should happen on a single tile in a single tick.
    * Fixed existing tests that were failing due to extra, incorrect assumptions and assertions.
    * Wrote robust irrigation tests that passed against the reference implementation and subsequently fixed the related bug.
    * Found four new **mutants**: JesusTakesTheWheel, MatlabArrays, SwissArmyKnife, and Grindset.

- **Day 9: September 30, 2025**
    * Created a comprehensive big cloud simulation test to stress-test the system and uncover remaining environment interaction bugs.
    * Performed minor bug fixes in both the Machine and EnvironmentController based on simulation results.
    * Found one new **mutant**: Floodgates.

- **Day 10: October 1, 2025**
    *   
    *

- **Day 9: October 2, 2025**
    *   





### Ege

- **Day 1:**
  * Constructed part of the skeleton
  * Implemented the simulation data for parser
  * Implemented the Farm class
  * Some machine controller functions implemented
- **Day 2:**
  * Rest of machine controller implemented
  * PlantStrategy, AnnualStrategy and PerennialStrategy implemented
- **Day 3:**
  * Implemented logger
  * Reviewed code and did bugfixes in MachineController and EnvironmentController
  * Cleaned up code and fixed detekt issues
- **Day 4:**
  * Made unit test for Farm and debugged problems
  * Created a helper class for SystemTests
- **Day 5:**
  * Bugfixes in machines, TickInfo, MachineMap, farm
  * Wrote integration testing for EnvironmentController
  * Debugged EnvironmentController
- **Day 6:**
  * Wrote system tests for EnvironmentController and debugged cloud merging
  * Made alternative system tests to figure out intended simulation behavior through testing against reference
  * Fixed errors in the system test helper, logger and EnvironmentMap

### Raj
- **Day 1:** IncidentController, Main, ScenarioParser, Parser and several skeletons
- **Day 2:** Validations in ScenarioParser and minor additions to SimulationData
- **Day 3:** Wrote the Incidents package, added statistics functionality in Simulation and MachineController
- **Day 4:** 
  - Fixes in Main, Simulation, MapParser, FarmsParser, ScenarioParser and SimulationData to build the project.
  - Added the InvalidFileException class.
- **Day 5:** 
  - Started debugging with system tests.
  - Added cross validation for incidents and sowing plans.
  - Fixes in PlantStrategy, Tile, Simulation and multiple Incident subclasses.
- **Day 6:**
  - Wrote system tests for machine traversal and sowing actions.
  - Made several changes and fixes based on test results from the server.
- **Day 7:**
  - Wrote system tests for collected harvest of a stuck machine.
  - Wrote system tests for map validation and incidents.
  - Wrote system tests for harvest estimate reduction.
  - Added valid tests to mutant registration
  - Wrote the `getAllTilesInRange()` and `getCoordInRange()` methods in `SimMap`
  - Unit tests for `SimMap`
- **Day 8:**
  - Wrote system tests for MOWING being reset due to ANIMAL ATTACK.
  - Wrote system tests for expected logging behaviour of BEE_HAPPY incident for POTATO.
  - Wrote system tests for expected logging behaviour of BEE_HAPPY incident after DROUGHT.
  - Fixed bugs in our implementation based on the results of above test-suites.
- **Day 9**
  - Wrote system tests for overlapping incidents and their penalties on harvest estimate.
  - Fixed tile ID logging for BEE_HAPPY based on system test results.
---


## Usage of Generative AI

Choose the correct option that applies to each individual student (if you diverted from your initial statement in the implementation plan, make sure to explicitly state it here):

**Paul Rauber:**
Used ChatGPT 5 to create UnitTest-Jsons, a structure and prototype or the plants and find logical errors, mainly in control flow methods

**Alex:** Didn't use any ai tools at all

**Marco Zillgen:**
Used ChatGPT-5, Claude Sonnet 4, and Gemini 2.5 Flash for a quick check of the code to catch simple mistakes.
Used Gemini for fast specification lookups and to verify Kotlin syntax.
Used Github Copilot (GPT-4.1) for very small inline code completions to improve writing speed, not for logical thinking. 

**Nabin:** Nabin used the following tools in the implementation phase:
* **ChatGPT GPT-5** was used for general questions about idiomatic Kotlin equivalents for code from other languages (Java, C, and OCaml), and to learn about built-in methods and resolve syntax issues.
* **GitHub Copilot** was used for code completion, used sparingly and only when the suggestions aligned with the expected output.
* **Google Gemini Flash 2.5** was used for generating boilerplate code for unit tests and for creating detailed documentation.
* All generated content was thoroughly validated, refined and corrected to ensure quality and accountability for the final product.

**Ege:** Used ChatGPT GPT-5 for the following purposes:
* Generating fields and function stubs for the skeleton
* Generating function bases for Logger
* Asking questions about the properties of kotlin functions

**Raj** used ChatGPT(GPT-5) for:
- finding more efficient ways do operations on Collections in kotlin
- finding bugs and inefficiencies in code.
- fixing annoying detekt issues.

We are aware of the potential dangers of using these tools and take full responsibility for any code, documents and other content produced during the group phase.
