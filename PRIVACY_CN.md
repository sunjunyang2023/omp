# OMP 隐私政策

**生效日期：[2025年6月3日]**

欢迎使用 OMP（以下简称“本应用”或“我们”）！本应用是一款网页应用，旨在通过微软官方 API 帮助您管理和使用您 OneDrive 中的媒体文件。

我们非常重视您的隐私。本隐私政策（以下简称“本政策”）旨在向您说明，当您使用我们的服务时，我们如何处理（或者更准确地说，**不处理**）您的信息。请仔细阅读本政策，确保您在充分理解并同意后使用我们的服务。

**1. 我们不收集您的个人信息**

我们郑重声明：OMP **不会在开发者服务器上收集、存储、传输、分析或出售任何您的个人身份信息或您 OneDrive 中的文件内容及元数据。**

本应用的设计理念是最大限度地保护用户隐私：

* **客户端运行：** 本应用主要在您的浏览器中直接运行。
* **直接交互：** 应用通过微软官方 API 与您的 OneDrive 账户进行交互。所有数据请求和传输均在您授权的前提下，在您的本地设备和您的 OneDrive 之间直接进行。
* **开发者无权限：** 开发者及本应用的服务器（如有，也仅用于托管应用本身的静态网页文件，不处理用户数据）无法访问、查看或存储您的个人 OneDrive 数据或任何个人身份信息。

**2. 数据的使用与授权**

* **用户授权：** 为了使本应用能够访问并操作您 OneDrive 中的文件（例如，列出文件、读取媒体文件以供播放），您需要通过微软的 OAuth 2.0 授权流程，明确授权本应用访问您 OneDrive 账户中的相关数据。我们请求的权限包括 `User.Read`（读取用户基本配置信息）、`Files.Read`（读取用户 OneDrive 文件）以及 `Files.ReadWrite.AppFolder`（在应用专属文件夹中读写数据，用于同步历史记录和播放列表）。
* **权限范围：** 本应用仅会在您授权的范围内访问您的 OneDrive 数据，并且仅用于实现应用的核心功能（如浏览、管理和播放您指定的媒体文件，同步您的播放历史和播放列表）。我们不会请求超出应用功能所必需的权限。
* **凭据安全：** 您的 OneDrive 登录凭据（用户名和密码）由微软的身份验证服务直接处理和验证，本应用不会获取、记录或存储您的这些凭据。MSAL 库（Microsoft Authentication Library）在客户端（您的浏览器）处理身份验证令牌。

**3. 数据的存储**

本应用本身**不设有独立的服务器来存储您的任何个人数据或文件内容。** 您通过本应用产生或使用的数据存储在以下位置：

* **用户 OneDrive 中：**
    * 根据本应用的的设计，应用相关的特定数据，会存储在您个人 OneDrive 的 `Apps/OMP` 文件夹下。
    * 这些数据由您自己掌控，开发者无法访问。
* **浏览器本地存储中：**
    * **localStorage：**
        * 用于缓存 MSAL 的身份验证状态。
        * 用于存储应用的 UI 设置（例如主题、视图偏好等）。
        * 用于存储当前的播放队列状态。
    * **IndexedDB：**
        * 用于缓存媒体文件的元数据（如歌曲标题、艺术家、专辑封面信息等），以提高加载速度和减少网络请求。
    * 以上这些存储在浏览器本地的数据仅供您个人在本地设备上使用，用于提升应用体验和性能，不会被传输给开发者或我们的服务器。

**4. 微软 OneDrive 的隐私政策**

您在 OneDrive 中存储的数据以及通过微软身份验证服务进行的授权，均受微软公司隐私政策的约束。我们强烈建议您查阅并理解微软的官方隐私声明，以了解微软如何收集、使用和保护您的数据。您可以访问 [https://privacy.microsoft.com/](https://privacy.microsoft.com/) 查看（请注意，此链接可能会变更，请以微软官方最新链接为准）。

**5. Cookies 和浏览器本地存储技术**

* **Cookies：** 本应用目前主要不直接设置和依赖 Cookies 来追踪用户或存储永久性个人信息。微软身份验证服务（MSAL）可能会在其流程中使用 Cookies，这遵循微软的隐私实践。
* **LocalStorage 和 IndexedDB：** 如第3点“数据的存储”中所述，本应用使用浏览器的 LocalStorage 和 IndexedDB 技术来存储身份验证缓存、UI偏好、播放队列以及媒体元数据。
    * 这些技术存储的信息仅限于应用运行和提升用户体验所必需的数据，并且仅保留在您的本地浏览器中，不会发送给开发者。
    * 您可以随时通过浏览器设置清除 Cookies、LocalStorage 和 IndexedDB 数据。但请注意，清除这些数据可能会导致部分应用设置恢复默认或需要重新登录。

**6. 数据安全**

* 我们通过行业标准的 OAuth 2.0 协议与微软 OneDrive API 进行安全通信，以确保您的授权过程和数据传输（在您的设备和 OneDrive 之间）的安全性。
* 您个人数据的安全也依赖于您妥善保管您的微软账户凭据以及微软 OneDrive 服务本身的安全机制。我们建议您使用强密码并为您的微软账户启用双因素认证。

**7. 第三方服务**

除微软 OneDrive API 和微软身份验证服务外，本应用不依赖其他会主动收集您个人信息的第三方服务并将数据回传给开发者。本应用使用了多种开源库来构建功能（如 `package.json` 文件所示），这些库遵循其各自的开源许可协议。

**8. 儿童隐私**

本应用不针对13岁以下的儿童（或您所在司法管辖区定义的其他适用年龄）。我们不会有意收集任何儿童的个人身份信息。

**9. 本隐私政策的变更**

我们可能会不时更新本隐私政策，以反映我们实践的变化或法律法规的要求。如果我们做出任何重大变更，我们将通过在本应用的网站上发布更新后的隐私政策来通知您，并在政策顶部注明“生效日期”。我们鼓励您定期查看本隐私政策以了解任何更新。您在变更生效后继续使用本应用即表示您接受修订后的隐私政策。

**10. 联系我们**

如果您对本隐私政策或我们对您信息的处理有任何疑问、意见或建议，请通过以下方式与我们联系：

* **GitHub：** [https://github.com/nini22P/omp](https://github.com/nini22P/omp)

感谢您使用 OMP！