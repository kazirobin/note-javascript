Of course! Here is a well-structured note you can save for your new Windows setup, combining all your steps into a clear, logical order.

---

### **New Windows PC Setup Checklist & Notes**

This checklist guides you through a standard development environment setup, including activation.

#### **Phase 1: Install Essential Software**

1.  **Google Chrome:** Download and install from the official website.
2.  **PotPlayer:** Download and install for media playback.
3.  **OBS Studio:** Download and install for screen recording.
    *   *Key Configuration:* After installation, go to **File > Settings > Output**. Set the **Recording Quality** to **High Quality**.
4.  **Visual Studio Code (VS Code):** Download and install.
    *   *Important:* During installation, **check all the optional boxes** (e.g., "Add to PATH", "Register as a supported file type", etc.). This makes it easier to launch VS Code from the terminal.
5.  **Git:** Download and install from git-scm.com. Use the default settings for a typical installation.
6.  **Node.js:** Download and install the **LTS** version from nodejs.org.

---

#### **Phase 2: Configure PowerShell & Verify Setup**

**Objective:** Enable scripts (like the one for activation) to run and verify Node.js & Git are installed correctly.

7.  **Open PowerShell as Administrator:**
    *   Press `Win + S`, type "PowerShell".
    *   Right-click "Windows PowerShell" and select **Run as administrator**.

8.  **Set Execution Policy:**
    *   In the Administrator PowerShell window, run **ONE** of the following commands. They all do the same thing. The third one is the most explicit.
    ```powershell
    # Choose only ONE of these:
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    # OR
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
    # OR (the most explicit version from your list)
    powershell Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```
    *   Type `Y` and press Enter when prompted.

9.  **Verify Installations in VS Code:**
    *   Open **VS Code**.
    *   Open the integrated terminal (**Ctrl + `**).
    *   Run the following commands to check if they are recognized:
    ```bash
    git --version
    node -v
    npm -v
    ```
    *   If these commands return version numbers, your setup is successful so far.

---

#### **Phase 3: Windows Activation (Use at Your Own Risk)**

**⚠️ Important Disclaimer:** This step involves running a remote script from the internet. This can be a security risk. Understand that you are responsible for the software on your machine. It is always recommended to use a genuine license from Microsoft.

10. **Activation Script:**
    *   If you choose to proceed, run the following command in your **Administrator PowerShell** window.
    ```powershell
    irm https://get.activated.win | iex
    ```
    *   This command (`irm` is short for `Invoke-RestMethod`) will download and execute the script from the given URL. Follow any on-screen instructions provided by the script.

---

### **Summary of Key Commands for Your Notes:**

```powershell
# Run in Admin PowerShell to allow scripts
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# Run in VS Code Terminal to verify setup
git --version
node -v
npm -v

# Activation (Run in Admin PowerShell at your own risk)
irm https://get.activated.win | iex
```
