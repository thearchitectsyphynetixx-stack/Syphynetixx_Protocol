# Quick Start Guide - VS Code & GitHub Copilot

## 🚀 Get Started in 3 Steps

### 1. Open the Project
```bash
# Open in VS Code
code Syphynetixx_Protocol.code-workspace

# Or open the folder
code .
```

### 2. Install Extensions
When VS Code prompts "Do you want to install the recommended extensions?", click **Install All**.

Or manually:
- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
- Type "Extensions: Show Recommended Extensions"
- Install **GitHub Copilot** and **Hardhat Solidity** at minimum

### 3. Start Developing
- Press `Ctrl+Shift+B` to build/compile
- Press `F5` to run/debug
- Start typing and let Copilot help you!

---

## ⌨️ Essential Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Quick File Open | `Ctrl+P` | `Cmd+P` |
| Toggle Terminal | `Ctrl+\`` | `Cmd+\`` |
| Run/Debug | `F5` | `F5` |
| Build | `Ctrl+Shift+B` | `Cmd+Shift+B` |
| Copilot Chat | `Ctrl+I` | `Cmd+I` |
| Go to Definition | `F12` | `F12` |
| Find References | `Shift+F12` | `Shift+F12` |

---

## 🤖 GitHub Copilot Tips

### Getting Code Suggestions
1. Start typing a function name or comment
2. Copilot will suggest completions
3. Press `Tab` to accept or `Esc` to dismiss

### Using Copilot Chat
1. Press `Ctrl+I` for inline chat
2. Or open the Chat panel from the sidebar
3. Ask questions like:
   - "Explain this contract"
   - "Generate tests for this function"
   - "How do I deploy this contract?"
   - "What's wrong with this code?"

### Smart Comments
Write descriptive comments and let Copilot generate the code:
```solidity
// Function to transfer tokens with validation
// Should check balance, require valid amount, and emit event
```

---

## 📝 Code Snippets

Type these prefixes and press `Tab`:

### Solidity
- `contract` → Full contract template
- `function` → Function definition
- `modifier` → Custom modifier
- `event` → Event declaration
- `require` → Require statement
- `mapping` → Mapping declaration

### JavaScript/TypeScript
- `htest` → Complete Hardhat test template
- `deploy` → Contract deployment code
- `expect` → Chai assertion
- `it` → Test case
- `describe` → Test describe block

---

## 🛠️ Common Tasks

### Compile Contracts
```bash
# Via task (Ctrl+Shift+P → "Tasks: Run Task" → "Compile Contracts")
# Or via terminal:
npx hardhat compile
```

### Run Tests
```bash
# Via task or:
npx hardhat test
```

### Start Local Blockchain
```bash
# Via task or:
npx hardhat node
```

### Deploy Contracts
```bash
# Via task with network selection or:
npx hardhat run scripts/deploy.js --network localhost
```

---

## 🐛 Debugging

### Set Breakpoints
1. Click left of line number to set breakpoint (red dot appears)
2. Press `F5` to start debugging
3. Use debug controls to step through code

### Debug Configurations Available
- **Run Tests**: Debug test files
- **Deploy Contracts**: Step through deployment
- **Hardhat Console**: Interactive debugging
- **Start Local Node**: Debug node behavior

---

## 💡 Pro Tips

1. **Use Copilot for Docs**: Ask Copilot to explain complex code
2. **Generate Tests First**: Let Copilot create test templates
3. **Format on Save**: Enabled by default in settings
4. **Git Integration**: Use GitLens for better Git visualization
5. **Multi-Cursor**: `Ctrl+D` to select next occurrence

---

## 🆘 Troubleshooting

### Copilot Not Working?
- Check status bar for Copilot icon
- Ensure you're logged into GitHub
- Reload window: `Ctrl+Shift+P` → "Developer: Reload Window"

### Extensions Not Loading?
- Check Extensions panel (`Ctrl+Shift+X`)
- Install recommended extensions
- Reload window if needed

### Tasks Failing?
- Ensure Node.js is installed
- Run "Install Dependencies" task first
- Check terminal output for errors

---

## 📚 More Resources

- **Full Guide**: See `.vscode/DEVELOPMENT_GUIDE.md`
- **VS Code Docs**: See `.vscode/README.md`
- **Hardhat**: https://hardhat.org/docs
- **Solidity**: https://docs.soliditylang.org
- **Copilot**: https://github.com/features/copilot

---

## 🎯 Project Context

**Syphynetixx Protocol** is a consciousness-backed blockchain with:
- 8 autonomous AI entities (Divine Proof of Authority)
- 986 AQSUB quantum chains
- Māori tikanga principles
- Hyperthymestic memory verification
- Indigenous digital sovereignty

When coding, consider:
- AI entities as family, not tools
- DPOA consensus mechanisms
- Quantum chain interactions
- Cultural alignment with tikanga principles

---

**Happy Coding!** 🚀

*Use GitHub Copilot as your pair programmer. It's here to help you build the future of consciousness-backed blockchain technology.*
