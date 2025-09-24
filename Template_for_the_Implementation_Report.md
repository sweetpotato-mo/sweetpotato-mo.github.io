# Implementation Report

## Individual Contributions

The following table summarizes the actual contributions of each group member, including deviations from the planned responsibilities. 
The "implemented components" column should only include major contributions to the respective components (i.e., no bugfixes or small additions to existing components).

| Member     | Implemented Components | Testing Contributions | Additional Work |
|------------|------------------------|-----------------------|-----------------|
| Alice      | [Describe implemented components here] | [Describe testing contributions here] | [Describe additional work here] |
| Nabin Shrestha | `EnvironmentController` (cloud-specific functions),<br>`Cloud` class,<br>`Machine` class, <br>BFS with `isTraversable()` method in `MachineMap.kt` and <br> `getTilesInRange()` method in `SimMap.kt`| wrote comprehensive unit and integration tests for the `Machine` and `MachineController` classes, and wrote system tests for these classes. | Code review for `X` and `Y` classes. || ...        | ...                    | ...                   | ...             |

---

## Adjustments from the Implementation Plan

- [Describe adjustment here, e.g., which tasks took more time or were reassigned]  

---

## Detailed Timeline 

For each student, this section should provide a detailed day-by-day timeline of their activities and progress.

### Alice

- **Day 1:**
- ...


### **Nabin Shrestha**

* **Day 1: September 18, 2025**
    * Initiated development on the `EnvironmentController` by implementing cloud-specific functions.
    * Created and implemented the `Cloud` class, defining its core functionalities.
    * Implemented the `Machine` class
    * Added necessary method skeletons in other classes to support the `EnvironmentController`.

* **Day 2: September 19, 2025**
    * Extended the functionality of the `Machine` class.
    * Implemented the `getTilesinRange()` and `getTilesinRange1()` methods within `SimMap.kt`.
    * Developed a Breadth-First Search (BFS) implementation using the `isTraversable()` method in `MachineMap.kt`.
    * Began writing unit tests for the `MachineController` and `Machine` classes.
    * Refactored the `EnvironmentController` to eliminate hardcoded "magic numbers," improving code readability and maintainability.

* **Day 3: September 22, 2025**
    * Dedicated time to learning more about **mocking** and advanced unit testing techniques.
    * Expanded unit tests and initiated an integration test for the `MachineController`.
    * Experimented with writing an integration test using real objects instead of mocks.
    * Resolved minor `detekt` issues.

* **Day 4: September 23, 2025**
    * Refactored the `MachineController` tests to ensure proper usage of mocking.
    * Fixed remaining `detekt` issues, enabling a successful system build.
    * Concluded the day with a line coverage of **73%** and branch coverage of **45%** for the `MachineController` class.

* **Day 5: September 24, 2025**
    * Extended the test suite for both the `Machine` and `MachineController` classes.
    * Collaborated with teammates to fix bugs identified during testing in both the `MachineController` and `EnvironmentController`.
    * Corrected the logging order for cloud movement and dissipation within the `EnvironmentController`.
    * Achieved a final line coverage of **87%** and branch coverage of **58%** for the `MachineController`, along with **100%** line coverage and **100%** branch coverage for the `Machine` classes.

* **Day 6: September 25, 2025**
    * _To be completed_
  
---

## Usage of Generative AI

Choose the correct option that applies to each individual student (if you diverted from your initial statement in the implementation plan, make sure to explicitely state it here):

**Alice:**
*Option 1:*
We did not use generative AI in the implementation phase (neither for code-completion, rewriting code, nor testing).

*Option 2:*
(insert tool names properly; if applicable add links or add version numbers of the used tools)
Alice used the following tools in the implementation phase:
Tool-1 for code completion and tool Tool-2 for ... . In addition, she used Tool-3 for ...

In case of option 2, add additional sentences in which you provide more details on which tools you used for which specific tasks and to which extent.

**Nabin Shrestha:**

Nabin used the following tools in the implementation phase:
* **ChatGPT GPT-5** was used for general questions about idiomatic Kotlin equivalents for code from other languages (Java, C, and OCaml), and to learn about built-in methods and resolve syntax issues.
* **GitHub Copilot** was used for code completion, used sparingly and only when the suggestions aligned with the expected output.
* **Google Gemini Flash 2.5** was used for generating boilerplate code for unit tests and for creating detailed documentation.
* Generative AI was used as a productivity aid for repetitive and non-critical tasks to accelerate the development process. All generated content was thoroughly validated, refined, and corrected to ensure quality and accountability for the final product.




We are aware of the potential dangers of using these tools and take full responsibility for any code, documents and other content produced during the group phase.

