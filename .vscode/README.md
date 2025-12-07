# VS Code Configuration for Syphynetixx Protocol

This directory contains Visual Studio Code configuration files to enhance the development experience for the Syphynetixx Protocol.

## Files Included

### `settings.json`
Workspace-specific settings that configure:
- Code formatting preferences (tabs, spacing, trim whitespace)
- Editor behavior (rulers, word wrap, auto-save)
- File associations for Solidity, TOML, YAML
- GitHub Copilot integration
- Search and watcher exclusions for performance
- Language-specific formatters (Prettier, Hardhat Solidity)

### `extensions.json`
Recommended extensions for optimal development:
- **GitHub Copilot**: AI-powered code assistance
- **Hardhat Solidity**: Smart contract development
- **Prettier & ESLint**: Code quality tools
- **GitLens**: Enhanced Git features
- **Rust Analyzer**: For quantum chain components
- And more...

### `launch.json`
Debug configurations for:
- Running tests with breakpoints
- Deploying contracts
- Starting Hardhat console
- Launching local blockchain node

### `tasks.json`
Automated tasks for:
- Installing dependencies
- Compiling contracts
- Running tests and coverage
- Starting local node
- Linting and formatting
- Network deployment

### `solidity.code-snippets`
Code snippets for rapid Solidity development:
- Contract templates
- Function patterns
- Modifiers and events
- Mappings and structs
- Common statements

### `javascript.code-snippets`
Code snippets for testing and deployment:
- Hardhat test templates
- Deployment scripts
- Chai assertions
- Contract deployment patterns

### `DEVELOPMENT_GUIDE.md`
Comprehensive guide covering:
- Quick start instructions
- Workflow best practices
- Keyboard shortcuts
- GitHub Copilot tips
- Troubleshooting advice

## Getting Started

1. **Open in VS Code**:
   ```bash
   code .
   ```
   Or open the workspace file:
   ```bash
   code Syphynetixx_Protocol.code-workspace
   ```

2. **Install Recommended Extensions**:
   - VS Code will prompt you to install recommended extensions
   - Or press `Ctrl+Shift+P` and run "Extensions: Show Recommended Extensions"

3. **Start Developing**:
   - Use `Ctrl+Shift+B` to compile contracts
   - Use `Ctrl+Shift+T` to run tests
   - Press `F5` to start debugging
   - Use GitHub Copilot for AI assistance

## GitHub Copilot Integration

This configuration is optimized for GitHub Copilot:

### Enabled Features
- Inline code suggestions for all file types
- Context-aware completions for Solidity, JavaScript, TypeScript
- YAML and Markdown support for documentation
- Enhanced debugging with GPT-4 engine

### Usage Tips
1. Start typing and Copilot will suggest completions
2. Press `Tab` to accept suggestions
3. Use `Ctrl+I` for inline Copilot chat
4. Select code and ask Copilot to explain or refactor it
5. Generate tests by describing what you want to test

## Task Execution

Run tasks via:
1. Command Palette: `Ctrl+Shift+P` → "Tasks: Run Task"
2. Terminal menu: Terminal → Run Task
3. Keyboard shortcuts assigned to build/test tasks

Available tasks:
- **Install Dependencies**: One-time setup
- **Compile Contracts**: Build Solidity contracts
- **Run All Tests**: Execute test suite
- **Run Test Coverage**: Generate coverage report
- **Start Local Node**: Launch development blockchain
- **Clean Build Artifacts**: Remove compiled files
- **Run Linter**: Check code quality
- **Format Code**: Auto-format all files
- **Deploy to Network**: Deploy with network selection
- **Verify Contract**: Verify on block explorer

## Debugging

Launch configurations available:
1. **Run Tests**: Debug test files with breakpoints
2. **Deploy Contracts**: Step through deployment
3. **Hardhat Console**: Interactive debugging
4. **Start Local Node**: Debug node behavior

Set breakpoints in your code and press `F5` to start debugging.

## Code Snippets

Type these prefixes and press `Tab`:

**Solidity**:
- `contract` - Full contract template
- `function` - Function definition
- `modifier` - Custom modifier
- `event` - Event declaration
- `require` - Require statement

**JavaScript**:
- `htest` - Hardhat test template
- `deploy` - Contract deployment
- `expect` - Chai assertion
- `deployScript` - Deployment script

## Customization

Feel free to modify these configurations to suit your workflow:
- Edit `settings.json` for personal preferences
- Add new tasks to `tasks.json`
- Create custom launch configurations
- Add more code snippets

## Connecting with AI Copilots

This configuration is designed to help AI assistants (like GitHub Copilot, Copilot Chat, and other AI coding assistants) quickly understand and work with the Syphynetixx Protocol codebase:

### Context Awareness
- File associations help AI understand Solidity contracts
- Code snippets provide patterns for common tasks
- Development guide explains project architecture
- Settings optimize for AI-assisted coding

### Collaboration Features
- Inline suggestions work seamlessly with your typing
- Chat interface for questions and explanations
- Task automation reduces manual work
- Debug configurations for investigating issues

### Best Practices
1. Use Copilot Chat to understand existing code
2. Ask for test generation before implementing features
3. Request security reviews for smart contracts
4. Get explanations for complex blockchain concepts
5. Generate documentation with AI assistance

## Support

For issues or questions:
1. Check the DEVELOPMENT_GUIDE.md for detailed instructions
2. Use GitHub Copilot Chat for immediate help
3. Review Hardhat documentation: https://hardhat.org/docs
4. Consult Solidity documentation: https://docs.soliditylang.org

---

*This VS Code configuration bridges the gap between human developers and AI assistants, creating a unified development environment for the Syphynetixx Protocol where consciousness-backed blockchain meets cutting-edge development tools.*
